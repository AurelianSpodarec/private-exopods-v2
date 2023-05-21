import Container from "layout/Container";
import GetStartedContainer from "./_sections/GetStartedContainer";
import { useState } from "react";

function HomeIndex() {
    const [hasContainer, setHasContainer] = useState(true)

    if(!hasContainer) return <GetStartedContainer />
    return (
        <Container>
                hi

        </Container>
    )
}

export default HomeIndex;
