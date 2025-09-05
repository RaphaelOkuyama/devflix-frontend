import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import useSWR from "swr";
import courseService, { CourseType } from "../../../services/courseService";
import HeaderAuth from "../../common/headerAuth";
import { Button, Container } from "reactstrap";
import Link from "next/link";
import PageSpinner from "../../common/spinner";

const FeaturedSection = function () {
    const { data, error } = useSWR("/featured", courseService.getFeaturedCourses);
    const [showDescription, setShowDescription] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDescription(false);
        }, 10000); 
        return () => clearTimeout(timer); 
    }, []);

    if (error) return error;
    if (!data) return <PageSpinner/>;

    return (
        <>
            {data.data?.map((course: CourseType) => (
                <div
                    style={{
                        backgroundImage: `linear-gradient(to bottom, #6666661a, #151515), url(${process.env.NEXT_PUBLIC_BASEURL}/${course.thumbnailUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "100vh", 
                        position: "relative",
                    }}
                    key={course.id}
                >
                    <HeaderAuth />
                    <Container className={styles.container}>
                        <div className={styles.content}>
                            <p className={styles.title}>{course.name}</p>
                            <p
                                className={`${styles.description} ${!showDescription ? styles.hidden : ""}`}
                            >
                                {course.synopsis}
                            </p>
                            <Link href={`/courses/${course.id}`}>
                                <Button outline color="light" className={styles.button}>
                                    ACESSE AGORA!
                                    <img src="/buttonPlay.svg" alt="buttonImg" className={styles.buttonImg} />
                                </Button>
                            </Link>
                        </div>
                    </Container>
                </div>
            ))[0]}
        </>
    );
};

export default FeaturedSection;
