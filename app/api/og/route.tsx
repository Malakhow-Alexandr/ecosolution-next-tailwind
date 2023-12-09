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
    ).then((res) => res.arrayBuffer());
    return new ImageResponse(
      (
        <div tw="flex flex-col w-full h-full items-center justify-center">
          <h1 tw="text-3xl text-gray-900 font-bold">
            {title}
          </h1>
          <img
            src={imageData}
            alt="Wind power plants in the field."
            width={417}
            height={207}
          />
        </div>
      )
    );
  } catch (error: any) {
    return new Response("Faild to generate OG", {
      status: 500
    });
  }
}
