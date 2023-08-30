const useDownload = (): {
  content: string;
  setContent: (data: string, fileName: string) => void;
  startDownload: () => void;
} => {
  let content;
  const linkNode = document.createElement('a');
  const setContent = (data: string, fileName: string) => {
    content = 'data:text/Json;charset=utf-8,' + encodeURIComponent(data);
    linkNode.download = fileName;
    linkNode.style.display = 'none';
    linkNode.href = content; //生成一个Blob URL
    document.body.append(linkNode);
  };
  const startDownload = () => {
    linkNode.click();
    URL.revokeObjectURL(linkNode.href);
    linkNode.remove();
  };
  return {
    content,
    setContent,
    startDownload,
  };
};

export default useDownload;
