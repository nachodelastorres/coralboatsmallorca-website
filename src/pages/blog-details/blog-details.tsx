import BlogDetailsArea from '@/components/blog/blog-details/blog-details-area';
import FooterOne from '@/layouts/footers/footer-one';
import HeaderOne from '@/layouts/headers/header-one';
import Wrapper from '@/layouts/wrapper';
import { IBlogDT } from '@/types/blog-d-t';

interface BlogDetailsProps {
  blog: IBlogDT;
}

const BlogDetailsMain = ({ blog }: BlogDetailsProps) => {
  return (
    <Wrapper>
      <HeaderOne hasTopBar />
      <main>
        <BlogDetailsArea blog={blog} />
      </main>
      <FooterOne />
    </Wrapper>
  );
};
export default BlogDetailsMain;
