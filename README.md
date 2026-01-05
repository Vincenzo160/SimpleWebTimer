# SimpleWebTimer
A simple timer for OBS.

## Usage
You can add `https://timer.gorzog.com` as a browser source on OBS to get a default 1-minute timer.

> [!NOTE]
> An interactive tool to customize the timer is avaliable on its [project page](https://timer.gorzog.com/customize).

You can use URL parameters to customize the timer. The following parameters are available:
  - `sec`: Seconds (will override `min`).
  - `min`: Minutes.
  - `color`: Hex color code for the timer.
  - `endColor`: Hex color code used when the timer has ended.
  - `blink`: Makes the timer blink when it has ended (defaults to `true`).
  - `hide`: Makes the timer hidden when it has ended (will override `blink`).

For example the URL of a 3 minute and 51 second timer that doesn't blink will look like this: `https://timer.gorzog.com?sec=231&blink=false`.

It's recommended to enable "Shutdown source when not visible" and "Refresh browser when scene becomes active" so that when you make the timer visible it will automaticaly start, you can refresh the source to restart the timer.
