"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.describeCourse = describeCourse;
function describeCourse(course) {
    switch (course.status) {
        case "DRAFT":
            return `Draft created by ${course.createdBy} on ${course.createdAt}`;
        case "PUBLISHED":
            return `Published on ${course.publishedAt}. Syllabus: ${course.syllabus}`;
        case "ACTIVE":
            return `Active with ${course.enrolledCount} students since ${course.startDate}`;
        case "ARCHIVED":
            return `Archived on ${course.archivedAt} with ${course.finalEnrollmentCount} total completions`;
        case "CANCELLED":
            return `Cancelled: ${course.reason} (effective ${course.cancelledAt})`;
        default: {
            const _exhaustiveCheck = course;
            throw new Error(`Unhandled course status: ${JSON.stringify(_exhaustiveCheck)}`);
        }
    }
}
