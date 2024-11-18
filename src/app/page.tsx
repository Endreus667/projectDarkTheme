"use client"

import { Button } from "@/components/Buttton";
import { Container } from "@/components/Container";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { ThemeProvider } from "@/context/Themecontext";


const Page = () => {
 
  return(
    <ThemeProvider>
      <Container>
        <header className="py-5">
          <h1 className="text-3xl">Titulo da pagina</h1>
        </header>
        <section>
          <p className="my-5">Conteudo da pagina</p>

          <Button label="Clqiue aqui" onClick={() => {}} />
        </section>
        <ThemeSwitch/>
      </Container>
    </ThemeProvider>
  )

}

export default Page;