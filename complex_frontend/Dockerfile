## 使用 Node 20.18.1
#FROM node:20.18.1 as builder
#
## 設定工作目錄
#WORKDIR /app
#
### 複製 package.json 和 package-lock.json
#COPY package*.json ./
##
### 安裝依賴
#RUN npm install
##
### 複製專案所有檔案
##COPY . .
##
### 開放 Angular 開發時的 4200 port
##EXPOSE 4200
##
### 設定啟動指令
##CMD ["npm", "run", "start"]
#
### prod
#COPY . .
#
#RUN npm run build --prod

# Stage 1: Build Angular app
FROM node:20-alpine as builder

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build --prod

# Stage 2: Serve with nginx
FROM nginx:stable-alpine

# 移除預設 nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# 複製 Angular build 好的檔案
COPY --from=builder /app/dist/complex/browser /usr/share/nginx/html

# 開放 port
EXPOSE 80

# 啟動 nginx
CMD ["nginx", "-g", "daemon off;"]


