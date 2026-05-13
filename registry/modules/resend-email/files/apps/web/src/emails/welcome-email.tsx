import { Body, Button, Container, Head, Heading, Html, Preview, Text } from "@react-email/components";

export function WelcomeEmail({ name, actionUrl }: { name: string; actionUrl: string }) {
  return (
    <Html lang="en">
      <Head />
      <Preview>Welcome to your workspace</Preview>
      <Body style={{ background: "#ffffff", fontFamily: "sans-serif" }}>
        <Container>
          <Heading>Welcome, {name}</Heading>
          <Text>Your account is ready. Open the dashboard to finish setup.</Text>
          <Button href={actionUrl}>Open dashboard</Button>
        </Container>
      </Body>
    </Html>
  );
}
