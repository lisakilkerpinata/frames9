import { getFrameMetadata } from '@coinbase/onchainkit';
import type { Metadata } from 'next';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: "Click to view next image"
    }
  ],
  image: `${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmV71pbn9CBjZ5WS39EtfY9Rn15EuFLsN49xomQ29a8Txc/Image1.jpeg`,
  post_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/frame?id=1`,
});

export const metadata: Metadata = {
  title: 'Create AI generated images',
  description: 'Create AI generated images',
  openGraph: {
    title: 'Create AI generated images',
    description: 'Create AI generated images',
    images: [`${process.env.NEXT_PUBLIC_GATEWAY_URL}/ipfs/QmV71pbn9CBjZ5WS39EtfY9Rn15EuFLsN49xomQ29a8Txc/Image1.jpeg`],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Create AI generated images</h1>
    <img src="https://pink-major-beaver-842.mypinata.cloud/ipfs/QmV71pbn9CBjZ5WS39EtfY9Rn15EuFLsN49xomQ29a8Txc/Image1.jpeg"></img>
    </>
  );
}

