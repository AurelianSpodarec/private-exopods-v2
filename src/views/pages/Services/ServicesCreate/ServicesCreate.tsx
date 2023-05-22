import Button from "atoms/Button/Button";
import Input from "atoms/Input";
import Container from "atoms/Container";
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


                <div className="space-y-10 max-w-3xl">

                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <Input label="Container Name" placeholder="Enter your container name "/>
                        </div>
                        <div>
                            
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <Input label="Image" placeholder="Ex. image:latest"/>
                        </div>
                        <div>
                            <Input label="Tag" placeholder="Ex. image:latest"/>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <Input label="Port" placeholder="Ex. 88.090"/>
                        </div>
                        <div></div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <Input label="Command" placeholder="Ex. image:latest"/>
                        </div>
                        <div></div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <Input label="AVRG" placeholder="Ex. image:latest"/>
                        </div>
                        <div></div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <Input label="Environment" placeholder="Ex. image:latest"/>
                        </div>
                        <div></div>
                    </div>

                    <div className="grid grid-cols-2 gap-10">
                        <div>
                            <Input placeholder="Key"/>
                        </div>
                        <div>
                            <Input placeholder="Value"/>
                        </div>
                    </div>
                    
                    </div>


                    <div className="mt-24">
                        <Button size="lg">Submit</Button>
                    </div>
                </section>
               


        </Container>
    )
}

export default ServicesCreate;
