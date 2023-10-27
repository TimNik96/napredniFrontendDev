export const capitalize = (item) => {
    return item.charAt(0).toUpperCase() + item.substring(1)
}

export const extractRegions = (arr) => {
    const regions = []

    arr.forEach((item) => {
        if (!regions.find((el) => el === item.region)) regions.push(item.region)
    })

    return regions
}
