import * as enrollmentsDao from "./dao.js";
export default function EnrollmentsRoutes(app) {
    app.get("/api/enrollments", (req, res) => {
        res.json(enrollmentsDao.getEnrollments());
    })

    app.put("/api/enrollments", (req, res) => {
        const enrollments = enrollmentsDao.enrollUserInCourse(req.body.user, req.body.course);
        res.json(enrollments);
    })

    app.delete("/api/enrollments/:userId/:courseId", (req, res) => {
        const {userId, courseId} = req.params;
        const enrollments = enrollmentsDao.unEnrollUserFromCourse(userId, courseId);
        res.json(enrollments);
    })
}