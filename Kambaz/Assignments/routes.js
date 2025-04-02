import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.get("/api/assignments", async (req, res) => {
        res.json(assignmentsDao.getAssignments());
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    });

    app.post("/api/assignments", async (req, res) => {
        const newAssignment = assignmentsDao.createAssignment(req.body);
        res.json(newAssignment);
    })

    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
        res.send(status);
    })
}