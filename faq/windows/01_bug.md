# I have a bug/strange client behavior, what can I do ?

If you notice an error or issues with the mod or its installation, before creating an issue report, try the following steps which may help solve your issue(s):

## 1. Clean installation

Completely remove Spotify so that there are no remnants left behind from current/previous versions of the client. [This patch](https://github.com/amd64fox/Uninstall-Spotify) will do it for you in one click, after that restart PC and run the SpotX installation again, this way you will perform a clean installation, which helps to avoid a lot of bugs associated with outdated versions.

## 2. Hosts file check

- Look at your hosts file, it should not contain different URLs that can cause the client to work incorrectly. Even if you believe you didn't add anything to it, go into it anyway and double-check it to be sure. Some ad blockers that you may have used in the past may have added entries to the hosts file automatically without your consent.
- To quickly open the host file, press `Win + R` and enter `%WinDir%\System32\Drivers\Etc\hosts`, in order for the system to allow you to edit the file, you need to open it as an administrator.
- If you don't know which lines to delete, back up the hosts file, then delete the original hosts, restart your computer and check your mistake again.

## 3. Disabling antivirus protection

Different antiviruses may respond differently to installing SpotX, as SpotX uses a system interpreter Powershell to modifiy an application Spotify.

If you have problems when starting the installation of SpotX, for example, the terminal window is forcibly closed (does not start) or the bat installation file itself is deleted, then try temporarily disabling or pausing the protection of your antivirus.

## 4. Error check in original client

- If you still see errors, then install the [original client](https://cutt.ly/8EH6NuH) and check if you experience the same error -- if the error is present in the original unmodified client then you will need to wait for a fix from the Spotify developers.
- To expedite the resolution of a problem in the original client, please create a problem report on [Spotify's support forum](https://community.spotify.com/t5/Desktop-Windows/bd-p/desktop_windows).
- In the meantime, you are waiting for a fix, you can temporarily return to the previous version of Spotify that worked for you and block updates in it, [this instruction](https://github.com/amd64fox/Rollback-Spotify) will help you with this.