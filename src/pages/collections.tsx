import React, {FC} from "react";
import {GetStaticPaths, GetStaticProps} from "next";
import Image from "next/image";

interface CollectionsProps {
  name: string;
  description: string;
  image?: string;
}

const Collections: React.FC<CollectionsProps> = ({
  name,
  description,
  image,
}) => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200">
      <h1>name</h1>
        {description && <p>{description}</p>}
        {image && <Image src={image} alt={name} width={200} height={200} />}
    </div>
  );
};


export default Collections;

export const getStaticPaths: GetStaticPaths = async () => {
  // Fetch the list of collections from your API or database
  const collections = [
    { slug: "collection-1", name: "Collection 1" },
    { slug: "collection-2", name: "Collection 2" },
    { slug: "collection-3", name: "Collection 3" },
  ];

  // Generate the paths for each collection
  const paths = collections.map((collection) => ({
    params: { slug: collection.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Fetch the collection data based on the slug parameter
  const { slug } = params as { slug: string };
  const collection = {
    slug,
    name: `Collection ${slug}`,
    description: `This is the description for Collection ${slug}`,
    image: `https://via.placeholder.com/640x480?text=Collection+${slug}`,
  };

  return { props: collection };
};