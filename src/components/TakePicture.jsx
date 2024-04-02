import { Image, StyleSheet, View } from "react-native";
import { useEffect, useState } from "react";
import { Camera } from 'expo-camera';
import { Button } from "./Button";

const images = [];
export { images };

export function TakePicture() {
    const [cameraPermission, setCameraPermission] = useState(false);
    const [camera, setCamera] = useState(null);
    const [pictureUri, setPictureUri] = useState(null);

    useEffect(() => {
        async function getCameraPermission() {
            const permission = await Camera.requestCameraPermissionsAsync();
            if (permission.status === 'granted') {
                setCameraPermission(true);
            }
        }
        getCameraPermission();      
    }, []);

    async function takePicture() {
        if (camera) {
            const picture = await camera.takePictureAsync();
            setPictureUri(picture.uri);
        }
    }

    function savePicture() {
        images.push(pictureUri);
        setPictureUri(false);
    }

    return (
        <View style={styles.container}>
            {cameraPermission && !pictureUri && 
                <View style={styles.cameraContainer}>
                    <Camera 
                        style={styles.cameraImg} 
                        ref={refCamera => setCamera(refCamera)}
                    />
                    <View style={styles.btnContainer}>
                        <Button 
                            label="Tirar Foto"
                            action={() => takePicture()}
                        />
                    </View>
                </View>
            }
            {cameraPermission && pictureUri && 
                <View style={styles.cameraContainer}>
                    <Image
                        style={styles.cameraImg}
                        source={{ uri: pictureUri }}
                    />
                    <View style={styles.btnContainer}>
                        <Button
                            label="Salvar Foto"
                            action={() => savePicture()}
                        />
                        <Button 
                            label="Excluir"
                            action={() => setPictureUri(null)}
                        />
                    </View>
                </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
    },
    cameraImg: {
        flex: 1,
    },
    btnContainer: {
        gap: 8,
        padding: 8,
    },
});