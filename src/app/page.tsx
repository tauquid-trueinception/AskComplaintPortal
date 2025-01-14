
import Form from "@/components/form";
import TopBar from "@/components/TopBar";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack height={'100%'} alignItems={'center'} bgcolor={'secondary.50'} >
    <TopBar
      links={[
        // { label: 'Home', href: '/' },
        // { label: 'About us', href: '/' },
        // { label: 'Contact us', href: '/' },
        // { label: 'Services', href: '/' },
        // { label: 'Experts', href: '/home' },
        // { label: 'Testimonials', href: '/' },
      ]}
    />
   <Stack>
    <Form/>
   </Stack>
  </Stack>
  );
}
