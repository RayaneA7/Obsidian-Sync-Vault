
<h1 style="text-align:center;">Obsidian for sync with mobile template vault</h1>

---

Hi, This is a demo folder for an [[Obsidian]] Vault !

Obsidian is a very powerful tool for note taking, but it can basically do anything else related to knowledge management, journalling, Literature reviews ... 

It can however be a pain to sync with mobile, and to have a full working system without paying ...

In this folder, we setup everything to start using Obsidian, and we show how to sync it with the mobile version using $Github$
# Setup Obsidian on PC


### Install Obsidian

- [ ] First, Download and install Obsidian, go to https://obsidian.md/download
- [ ] Then click "Open folder as Vault" and select the repository folder.
![[Screenshot 2025-02-20 at 11.01.33.png]]


Now that you're in obsidian, you can start exploring it, I advise you to explore first these plugins :

1. **Tasks** core-plugin.
2. **Zotlit** to link it with **zotero**.
3. Dataview
4. CustomJs, to use `Javascript` to write your own custom views.
5. **Github Sync**

you will find that the current folder come with all these options configured, how to use all of them will be perhaps the subject of another work, but for now let's setup the **Github** sync with mobile.

After doing the setup of **Github Sync** plugin on PC, we will go to mobile side.
### Mobile Side

This tutorial is for **Android** but the parallel procedure works with **IOS** too.

#### Setup storage

- Download [**Termux**](https://play.google.com/store/apps/details?id=com.termux&hl=fr) app from Google Play Store.
- Run to configure repos for git installation.
```cmd 
termux-change-repo
```
then 
```cmd 
pkg install git -y
```
- Run the command to setup the access for mobile's storage
```cmd
termux-setup-storage
```

- Setup ssh access for git
```cmd 
ssh-keygen -t ed25519 -C "write something..."
```
then take the output content of this file

```cmd
cat ~/.ssh/id_ed25519.pub
```
and use it for the completion of this github tutorial about [ssh-connection](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)
- Go to the shared folder 
```cmd
cd storage/shared
```
- 
- Clone this repo (ensure the cloning is done using ssh)
```cmd
git clone git@github.com:RayaneA7/Obsidian-Sync-Vault.git
```
- Test pushing pulling, and save your credentials.
- Create in `~` a script with this content : 

```shell
#!/bin/bash
cd ~/storage/shared/Obsidian-Sync-Vault
git add .
git commit -m "Android Sync $(date)"
git pull
git push
```
- run 
```cmd
chmod +x sync_repo.sh
```

And you're done !



#### Note
1. Make sure each time you finish you're work on PC to click on the git sync icon to push, you will find that it's configured to push each 30 mins, you can adjust as you need.
2. Each time you use obsidian on mobile, make sure to execute the `./sync_repo.sh` before and after using obsidian, don't worry the habit sticks quickly xD
3. Whenever you use obsidian on mobile, make sure to click the sync icon on pc to pull the changes.