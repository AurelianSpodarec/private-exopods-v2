import { useParams } from "react-router-dom";

import Container from "layout/Container";
import PageHeader from "molecules/PageHeader";

function ServicesShow() {
    const { id } = useParams();

    return (
        <Container>
            <PageHeader title={`Site ${id}`} className="capitalize" />

        </Container>
    )
}

export default ServicesShow;
