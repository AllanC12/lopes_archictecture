import { RefObject } from "react";

const defineOpacityImage = (action: string, element: Element) => {
    if (element instanceof HTMLElement) {
      if (action === "remove") {
        element.style.setProperty("opacity", "0");
      } else if (action === "add") {
        element.style.setProperty("opacity", "1");
      }
    }
  };

  const runSlides = (refContainer: RefObject<HTMLDivElement>) => {
    const imageList = refContainer.current?.children as HTMLCollection;
    let index: number = 0;
    let indexMax: number = imageList!.length - 1;

    imageList![index].classList.add("selected");
    defineOpacityImage("add", imageList![index]);

    setInterval(() => {
      imageList![index].classList.remove("selected");
      defineOpacityImage("remove", imageList![index]);
      index++;
      if (index > indexMax) index = 0;
      imageList![index].classList.add("selected");
      defineOpacityImage("add", imageList![index]);
    }, 3000);
  };

  export default runSlides