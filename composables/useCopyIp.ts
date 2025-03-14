// @ts-ignore
import Swal from 'sweetalert2/dist/sweetalert2.js';

const fallbackCopyTextToClipboard = (text: string) => {
  var textArea = document.createElement("textarea");
  textArea.value = text;

  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);

    if (successful) {
      Swal.fire({
        title: 'IP address copied!',
        text: text,
        icon: 'success',
        confirmButtonText: 'Close',
      });
    } else {
      Swal.fire({
        title: 'Failed to copy IP address',
        text: text,
        icon: 'error',
        confirmButtonText: 'Close',
      });
    }
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
};

export const useCopyIp = () => {
  const copyIp = async () => {
    const appConfig = useAppConfig();

    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(appConfig.minecraftIp);
      return;
    }

    await navigator.clipboard.writeText(appConfig.minecraftIp);

    navigator.clipboard.writeText(appConfig.minecraftIp).then(function() {
      console.log('Async: Copying to clipboard was successful!');
      Swal.fire({
        title: 'IP address copied!',
        text: appConfig.minecraftIp,
        icon: 'success',
        confirmButtonText: 'Close',
      });
    }, function(err) {
      console.error('Async: Could not copy text: ', err);
      Swal.fire({
        title: 'Failed to copy IP address',
        text: appConfig.minecraftIp,
        icon: 'error',
        confirmButtonText: 'Close',
      });
    });
  };

  return {
    copyIp,
  };
};
