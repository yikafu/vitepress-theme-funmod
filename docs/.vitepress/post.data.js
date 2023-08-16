const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

// 全局变量
let cache = {};
const cwd = process.cwd();

export default {
  // 监听docs/posts文件夹下md文件变化
  watch: path.join(cwd, "docs/posts/") + "**/*.md",
  async load() {
    const alldata = getallData();
    return {
      ...alldata,
    };
  },
};

function getallData() {
  const parentPath = path.join(cwd, "docs/posts/");
  const files = fs.readdirSync(parentPath);

  const datajson = {};
  const tagData = [];

  // 遍历文件夹下的所有文件
  files.map((item) => {
    let fullpath = parentPath + item; //当前文件路径
    let fileContent = fs.readFileSync(fullpath, "utf-8"); //读取文件内容
    const { data, content } = matter(fileContent);
    const des = content.slice(0, 100) + '...';
    const frontmatter = {
      title: data.title,
      date: (data.date).toISOString().slice(0, 10),
      tags: data.tags,
      description: des
    };
    // 读取tags
    if (data.tags) {
      data.tags.forEach((item) => {
        tagData.push(item);
      });
    }
    datajson[item] = frontmatter;
  });

  // 按时间倒序,输出一个对象
  cache = Object.keys(datajson)
    .sort((a, b) => {
      return new Date(datajson[b].date) - new Date(datajson[a].date);
    })
    .reduce((acc, cur) => {
      acc[cur] = datajson[cur];
      return acc;
    }, {});

  return {
    postData: cache,
    yearData: getYearData(datajson),
    tagData: Array.from(new Set(tagData)),
  };
}

// 获取年份数据
function getYearData(Obj) {
  const yeardatas = Object.entries(Obj)
    .map(([key, value]) => ({
      year: value.date.slice(0, 4),
      time: value.date.slice(5, 10),
      name: key.replace(".md", ""),
    }))
    .sort((a, b) => {
      return new Date(b.time) - new Date(a.time);
    })
    .reduce((acc, { year, name, time }) => {
      acc[year] = acc[year] || [];
      acc[year].push({ name, time });
      return acc;
    }, {});
  
    return yeardatas;
}
