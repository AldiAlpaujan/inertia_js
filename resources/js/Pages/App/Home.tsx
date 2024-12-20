import { Box, Flex, Text, Title } from "@mantine/core";

const Home = () => {
  return (
    <Box>
      <Flex direction={'column'} gap={'md'}>
        <Flex direction={'column'} gap={'sm'}>
          <Title order={1} c={'var(--mantine-color-grey-7)'}>
            Heading 1
          </Title>
          <Title order={2} c={'var(--mantine-color-grey-6)'}>
            Heading 2
          </Title>
          <Title order={3} c={'var(--mantine-color-grey-5)'}>
            Heading 3
          </Title>
          <Title order={4} c={'var(--mantine-color-grey-9)'}>
            Heading 4
          </Title>
          <Title order={5} c={'var(--mantine-color-grey-9)'}>
            Heading 5
          </Title>
        </Flex>
        <Flex gap={'md'}>
          <Box h={100} w={100} bg={'var(--mantine-color-primary-0)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-primary-2)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-primary-5)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-primary-7)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-primary-9)'} />
        </Flex>
        <Flex gap={'md'}>
          <Box h={100} w={100} bg={'var(--mantine-color-info-0)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-info-2)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-info-5)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-info-7)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-info-9)'} />
        </Flex>
        <Flex gap={'md'}>
          <Box h={100} w={100} bg={'var(--mantine-color-success-0)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-success-2)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-success-5)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-success-7)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-success-9)'} />
        </Flex>
        <Flex gap={'md'}>
          <Box h={100} w={100} bg={'var(--mantine-color-warning-0)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-warning-2)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-warning-5)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-warning-7)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-warning-9)'} />
        </Flex>
        <Flex gap={'md'}>
          <Box h={100} w={100} bg={'var(--mantine-color-error-0)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-error-2)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-error-5)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-error-7)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-error-9)'} />
        </Flex>
        <Flex gap={'md'}>
          <Box h={100} w={100} bg={'var(--mantine-color-grey-0)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-grey-1)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-grey-2)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-grey-3)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-grey-5)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-grey-6)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-grey-7)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-grey-8)'} />
          <Box h={100} w={100} bg={'var(--mantine-color-grey-9)'} />
        </Flex>
      </Flex >
    </Box>
  )
}


export default Home;