export const handleDownload = (event: React.MouseEvent<HTMLButtonElement>, setLoading: (loading: boolean) => void, setDownload: (download: boolean) => void, lang: string): void => {
    const path: string = `/cv/${lang}/LukaszFabia.pdf`;
    event.preventDefault();
    setLoading(true);

    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = `LukaszFabia-${lang}.pdf`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);

    setLoading(false);
    setDownload(true);
};