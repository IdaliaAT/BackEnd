export const isUser = (req, res, next) => {
    if (req.body.role === "admin") {
        console.log("User ok")
    } else {
        res.redirect(401, "/")
    }
    next()
}