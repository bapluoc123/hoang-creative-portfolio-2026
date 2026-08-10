import NextImage, { type ImageProps } from "next/image";

export default function UnoptimizedImage(props: ImageProps) {
  return <NextImage {...props} unoptimized />;
}
