/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { title } from "process";

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const hasTitle = searchParams.has("title");
    const title = hasTitle
      ? searchParams.get("title")?.slice(0, 100)
      : "Ecosolution";

    const imageData = await fetch(
      new URL(
        "../../../public/cases/Case4.png",
        import.meta.url
      )
    ).then((res) => {
      return res.arrayBuffer();
    });

    const dataUrl = `data:image/png;base64,${Buffer.from(
      imageData
    ).toString("base64")}`;
    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center bg-white">
          <div tw="bg-gray-50 flex flex-col w-full">
            <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
              <h1 tw="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
                {title}
              </h1>
              <img
                src={dataUrl}
                alt="Wind power plants in the field."
                width={417}
                height={207}
              />
            </div>
          </div>
        </div>
      )
    );
  } catch (error: any) {
    return new Response("Faild to generate OG", {
      status: 500
    });
  }
}
