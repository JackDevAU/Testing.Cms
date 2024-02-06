import { CustomDocumentRenderer } from '@/components/keystatic/custom-document-renderer/custom-renderer';
import { reader } from '@/lib/reader';



export default async function Post({params}: {params: {slug: string}}) {
  const post = await reader.collections.posts.read(params.slug);
    if(!post){
        return <div>Post not found</div>
    }
  return (
    <>
      <h1>{post.title}</h1>
      <CustomDocumentRenderer document={await post.content()}  />
    </>
  );
}
