import type { CourseWithPath } from '~/types/course';

interface CoursesReturn {
  course: Maybe<CourseWithPath>;
}

export const useCourse = (courseSlug: string): CoursesReturn => {
  const { courses } = useCourses();
  const course = courses.find((course) => course.courseSlug === courseSlug);
  return {
    course,
  };
};
