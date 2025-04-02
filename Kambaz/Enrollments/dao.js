import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";

export function getEnrollments() {
    return Database.enrollments;
}

export function enrollUserInCourse(userId, courseId) {
    Database.enrollments = [...Database.enrollments, { _id: uuidv4(), user: userId, course: courseId }];
    return Database.enrollments;
}

export function unEnrollUserFromCourse(userId, courseId) {
    Database.enrollments = Database.enrollments.filter(e => e.courseId !== courseId && e.user !== userId);
    return Database.enrollments;
}
