function loadDataUrl(file: File) {
  const fileReader = new FileReader();

  const loadDataUrlPromise = new Promise<string>((resolve, reject) => {
    fileReader.onload = () => {
      const result = fileReader.result;

      if (typeof result === 'string') {
        resolve(result);
      } else {
        reject(new Error(`Failed to read file: ${file.name}`));
      }
    };

    fileReader.onerror = () => {
      reject(new Error(`Failed to read file: ${file.name}`));
    };
  });

  fileReader.readAsDataURL(file);

  return loadDataUrlPromise;
}

function createImageFromDataUrl(dataUrl: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => {
      resolve(image);
    };

    image.onerror = () => {
      reject(new Error(`Failed to create image for dataUrl: ${dataUrl}`));
    };

    image.src = dataUrl;
  });
}

export const IoUtils = {
  loadDataUrl,
  createImageFromDataUrl,
};
