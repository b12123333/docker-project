# 使用 Node 20.18.1
FROM node:20.18.1 as builder

# 設定工作目錄
WORKDIR /app

## 複製 package.json 和 package-lock.json
COPY package*.json ./
#
## 安裝依賴
RUN npm install
#
## 複製專案所有檔案
#COPY . .
#
## 開放 Angular 開發時的 4200 port
#EXPOSE 4200
#
## 設定啟動指令
#CMD ["npm", "run", "start"]

## prod
COPY . .

RUN npm run build --prod


