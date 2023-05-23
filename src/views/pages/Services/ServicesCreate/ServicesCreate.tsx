import Button from "atoms/Button/Button";
import Input from "atoms/Input";
import Container from "atoms/Container";
import PageHeader from "molecules/PageHeader";
import { useState } from "react";

// TODO: Refactor once API ready
function Box() {
    return (
        <div className="bg-[#F5F5F7] px-6 py-3 rounded-xl">
        <div className="flex items-center">
            <div className="bg-[#D7D7D7] rounded-full p-3 h-14 w-14">
                <img src="https://i.postimg.cc/cJfGhj36/wordpress-svgrepo-com-1.png" alt="" />
            </div>
            <h3 className="text-xl text-[#0C0B0B] font-['Poppins'] font-normal px-8">Jenkins</h3>
        </div>
        </div>
    )
}


function RenderEnv({ onClick }:any) {
    return (
        <div className="flex items-center">
            <div className="grid grid-cols-2 gap-10">
            <div>
                <Input placeholder="Key"/>
            </div>
            <div>
                <Input placeholder="Value"/>
            </div>
            </div>
            
            <button type="button" onClick={onClick} className="ml-4" >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M7.5 13.625V1.375" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M1.375 7.5H13.625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </button>
        </div>
    )
}

function ServicesCreate() {

    const [env, setEnv] = useState([]);


    function addEnvFile() {
        setEnv((prevEnv) => [
          ...prevEnv,
          { name: 'env' }
        ]);
      }


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

                    <div>
                  
                        <div className="space-y-10">
                        <RenderEnv onClick={() => addEnvFile()} />
                        {Array.isArray(env) && env.map((item) => {
                            return <RenderEnv onClick={() => addEnvFile()} key={item.name} />
                        })}
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
