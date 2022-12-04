const sliderUrlData = [
    "Leaves.jpg",
    "Murial.jpg",
    "Pattern.jpg",
    "Murial.jpg",
    "Pattern.jpg"
]

export default function SliderContent(indexObj) {

    const imgLength = Object.keys(sliderUrlData).length;

    function generateNewIndex(oldIndex, indexShift) {
        let index

        if (oldIndex > imgLength - 1) {
            index = oldIndex % (imgLength)
        }
        else if (oldIndex < 0) {
            index = (-1) * oldIndex % (imgLength)
        }
        else {
            index = oldIndex
        }
        return index
    }

    function generateImageArray(index) {
        let lastImage, currImage, nextImage

        switch (index) {
            case 0:
                currImage = sliderUrlData[index]
                lastImage = sliderUrlData[imgLength - 1]
                nextImage = sliderUrlData[index + 1]
                break;
            case (imgLength - 1):
                currImage = sliderUrlData[index]
                lastImage = sliderUrlData[index - 1]
                nextImage = sliderUrlData[0]
                break;
            default:
                currImage = sliderUrlData[index]
                lastImage = sliderUrlData[index - 1]
                nextImage = sliderUrlData[index + 1]
                break;
        }
        return [lastImage, currImage, nextImage]
    }

    let newIndex = generateNewIndex(indexObj.index, indexObj.indexShift);
    return generateImageArray(newIndex)
}