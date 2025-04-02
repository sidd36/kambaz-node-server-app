export default function PathParameters(app) {
    app.get("/lab5/add/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const sum = parseInt(a) + parseInt(b);
        res.send(sum.toString());
    });
    app.get("/lab5/subtract/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const diff = parseInt(a) - parseInt(b);
        res.send(diff.toString());
    });
    app.get("/lab5/multiply/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const pro = parseInt(a) * parseInt(b);
        res.send(pro.toString());
    });
    app.get("/lab5/divide/:a/:b", (req, res) => {
        const { a, b } = req.params;
        const quo = parseInt(a) / parseInt(b);
        res.send(quo.toString());
    });
};
