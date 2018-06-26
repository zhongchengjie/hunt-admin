# 指定我们的基础镜像是node，版本是v8.3.0
FROM node:8.3

# 将根目录下的文件（除了.dockerignore排除的目录）都copy到container（运行此镜像的容器）文件系统的app文件夹下
COPY . /app

#指定接下来的工作路径为/app
WORKDIR /app

# 安装项目依赖
RUN ["npm", "install"]

# 容器对外暴露的端口号
EXPOSE 8080/tcp

# 容器启动时执行的命令，类似npm run start
CMD ["npm", "start"]