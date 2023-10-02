try {
    const response = await getUsers()
    console.log("pozdrav")
} catch (error) {
    console.log(error.message)
}
