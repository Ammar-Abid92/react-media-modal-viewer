# React Media Modal Viewer

A simple and customizable media modal viewer for React applications that supports images, videos, and other file types. Easily display your media in a beautiful, interactive modal viewer with just a few lines of code.

![Demo Gif](https://github.com/user-attachments/assets/201eadf4-d17d-47ec-a312-dbf2199ff1b2)



## Installation

Install the package via npm or yarn:

```bash
# Using npm
npm install react-media-modal-viewer

# Using yarn
yarn add react-media-modal-viewer

```

## Sample Code

```js
import React from "react";
import MediaModalViewer from "react-media-modal-viewer";
import Dummy1 from "./assets/images/Dummy1.jpg";
import Dummy2 from "./assets/images/Dummy2.jpg";
import Dummy3 from "./assets/images/Dummy3.jpg";

function App() {
  const media = [
    { image: Dummy1 },
    { image: Dummy3 },
    { image: Dummy2 },
    { image: Dummy1 },
    { image: Dummy2 },
  ];

  return (
    <MediaModalViewer
      featuredMedia={media}
      mediaContainerStyles={{
        width: "30%",
        height: "100%",
      }}
    />
  );
}

export default App;
```

## Options

| Property             | type                               |      required?       | Description                                                                                                                                                             
| -------------------- | --------------------- | :-----------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| featuredMedia        | { image: string; }[]               |    Yes               | An array of media objects containing the image URL or path to be displayed. |   
| mediaContainerStyles | BoxProps                           |    No                | CSS styles to be applied to the media container. Customize the size, positioning, and appearance of your media. |   
| fileType             | "image" or "video" or "application" |    No                | Specifies the type of media being displayed. |   

## Contributing
Feel free to open issues or pull requests if you have any improvements or suggestions.

## License
MIT




