import Container from "layout/Container";
import PageHeader from "molecules/PageHeader";

// TODO: Refactor once API ready
function Box() {
    return (
        <div className="bg-[#F5F5F7] px-6 py-3 rounded-xl">
        <div className="flex items-center">
            <div className="bg-[#D7D7D7] rounded-full p-3 h-14 w-14">
                <img src="https://i.postimg.cc/cJfGhj36/wordpress-svgrepo-com-1.png" alt="" />
            </div>
            <h3 className="text-xl text-[#0C0B0B] font-normal px-8">Jenkins</h3>
        </div>
        </div>
    )
}

function ServicesCreate() {
    return (
        <Container>

                <section>
                    <PageHeader title="Chose Container" />
                    <div className="flex space-x-6">
                        <Box />
                        <Box />
                        <Box />
                    </div>
                </section>

                <div className="my-8">
                    <span>Or</span>
                </div>

                <section>
                    <PageHeader title="Create your first free container">
                        <p className="mt-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </PageHeader>
                    <div>
                        
                    </div>
                </section>
               


        </Container>
    )
}

export default ServicesCreate;
