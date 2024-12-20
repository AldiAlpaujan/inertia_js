import { AppShell, Burger } from "@mantine/core";
import { ReactNode, useState } from "react";

const PageLayout = ({ children }: { children: ReactNode }) => {
  const [open, opened] = useState(false);
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'xs',
        collapsed: { desktop: !open },
      }}
    >
      <AppShell.Header py={"xs"} px={"lg"}>
        <Burger opened={open} onClick={() => opened(!open)} />
      </AppShell.Header>
      <AppShell.Main>
        {children}
      </AppShell.Main>
      <AppShell.Navbar>
        Ieu NavBar
      </AppShell.Navbar>
    </AppShell>
  );
}

export default PageLayout;
