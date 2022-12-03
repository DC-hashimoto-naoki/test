import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Loader } from 'semantic-ui-react';


interface SearchCatImage {
  id: string;
  url: string;
  width: number;
  height: number
}

interface IndexPageProps {
  initialCatImageUrl: string;
}

const fetchCatsImages = async (): Promise<SearchCatImage> => {
  const url = "https://api.thedogapi.com/v1/images/search";
  const res = await fetch(url);
  const result = await res.json();
  // console.log(result[0]);
  return result[0];
}

export default function Home() {
  const initialImageUrl = "https://cdn2.thedogapi.com/images/0f3H1Xp5A.jpg";
  const [catImageUrl, setCatImageUrl] = useState(initialImageUrl);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    setIsLoading(true);
    const catImage = await fetchCatsImages();
    setCatImageUrl(catImage.url);
    setIsLoading(false)
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}>
      <h1>犬画像アプリ</h1>
      {isLoading ? (
        <Loader active size='huge' inline='centered'>Loading</Loader>
      ): (
        <img src={catImageUrl} width={500} height="auto"/>
      ) }
      <button style={{ marginTop: 20 }} onClick={handleClick}>本日のわんこ</button>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps<IndexPageProps> = async () => {
//   const catImage = await fetchCatsImages();
//   return {
//     props: {
//       initialCatImageUrl: catImage.url
//     }
//   }
// };