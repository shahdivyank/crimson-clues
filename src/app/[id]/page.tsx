import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { contents } from "@/data/contents";
import Image, { StaticImageData } from "next/image";

export const generateStaticParams = () => {
  const ids = [
    "372",
    "815",
    "463",
    "921",
    "107",
    "689",
    "254",
    "348",
    "576",
    "193",
    "412",
  ];

  return ids.map((page) => ({ id: page }));
};

interface props {
  params: Promise<Record<string, string>>;
}

const Page = async ({ params }: props) => {
  const { id } = await params;

  const { name, title, cases, kills, years, description, image } = contents[id];

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <Card className="w-11/12">
        <CardHeader className="flex-row items-center text-center">
          <Image
            src={image as StaticImageData}
            alt="Profile"
            className="w-1/3 rounded-full"
          />
          <div className="ml-3 w-full text-left">
            <CardTitle className="text-2xl">{title as string}</CardTitle>
            <CardDescription className="text-lg">
              {name as string}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-around">
            <div className="text-center">
              <p>Cases</p>
              <p>{cases as string}</p>
            </div>
            <div className="text-center">
              <p>Kills</p>
              <p>{kills as string}</p>
            </div>
            <div className="text-center">
              <p>Years</p>
              <p>{years as string}</p>
            </div>
          </div>

          <p className="my-4 text-center">{description as string}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
