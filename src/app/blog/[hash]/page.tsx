import { postsGetList } from '@/services/posts';
import { Container, MarkdownRender, Page } from '@/components';
import { Box, Text, Heading } from '@chakra-ui/react';

/**
 用于静态生成文件
 */
export const generateStaticParams = async () => {
  const posts = await postsGetList();
  const paths = posts.map(({ hash }) => ({ hash }));
  return paths;
};

export default async function Posts({ params }: any) {
  const { hash } = params;
  const posts = await postsGetList();
  const post = posts.find(x => x.hash === hash);

  return (
    <Page isFull={true}>
      <Container maxW={'4xl'}>
        <Heading my={8}>{post?.title}</Heading>
        <Text mb={8}>
          {post?.date}
        </Text>
        <MarkdownRender>
          {post?.content || ''}
        </MarkdownRender>
      </Container>
    </Page>
  );
}