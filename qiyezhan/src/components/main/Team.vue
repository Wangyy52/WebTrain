<template>
  <div class="team container">
    <h3>团队介绍</h3>
    <div class="team-item">
      <img src="../../assets/img/team_img_buou.jpg" alt />
    </div>
    <div class="team-item">
      <div class="team-item-main">
        <h4>布偶猫</h4>
        <p>布偶猫，又称“布拉多尔（Ragdoll）”，发源于美国，是一种杂交品种宠物猫。是现存体型最大、体重最重的猫之一。头呈楔形，眼大而圆，被毛丰厚，四肢较长且富有肉感，尾长，身体柔软，毛色有重点色、手套色或双色等等。布偶猫较为温顺好静，对人友善。</p>
        <div class="team-item-name">
          <hr />
          <p>布偶猫的体毛属于中长型，不会缠结在一起，质地柔滑。它的尾巴蓬松，颈部通常带"围脖"，而臀部的体毛也比较长。定期梳理毛发会让布偶猫感到十分舒服。布偶猫是最漂亮的纯种猫之一。</p>
        </div>
      </div>
    </div>
    <div class="team-item">
      <div class="team-item-main">
        <h4>挪威森林猫</h4>
        <p>挪威森林猫（Norwegian Forest Cat），以白话直译的说法，就是在挪威森林里面栖息的，生存的猫，这是斯堪地半岛特有的品种，其起源不明，常常以像妖精的猫出现在北欧的神话之中。挪威森林猫外观与缅因猫相似，与西伯利亚森林猫同列。森林猫生长的环境非常寒冷和恶劣，因此它长有比其它猫更厚密的被毛和强壮的体格。</p>
        <div class="team-item-name">
          <hr />
          <p>挪威森林猫体大肢壮，奔跑速度极快，不怕日晒雨淋，行走时颈毛和尾毛飘逸，非常美丽。但是，生长在挪威森林内地的猫，数目已逐年减少，一时有绝迹的危机。因而，在进入一九七零年代初期，努力保存、繁殖，就显得格外重要。</p>
        </div>
      </div>
    </div>
    <div class="team-item">
      <img src="../../assets/img/team_img_meng.jpg" alt />
   
    </div>
    <div class="team-item">
      <img src="../../assets/img/team_img_duanmao.jpg" alt />
    </div>
    <div class="team-item">
      <div class="team-item-main">
        <h4>英国短毛猫</h4>
        <p>英国短毛猫，体形圆胖，四肢粗短发达，毛短而密，头大脸圆，温柔平静，对人友善，极易饲养。大而圆的眼睛根据被毛不同而呈现各种颜色。作为一个古老的猫品种，其历史可追溯至古罗马时期的家猫，由于拥有悠久的育种历史，可以称得上是猫家族中的典范。</p>
        <div class="team-item-name">
          <hr />
          <p>英国短毛猫除了拥有固定而聚，代表性的遗传特征之外，又具有丰富的变异性，如背毛色眼睛颜色等。更重要的是，有了广泛的配种历史后，这种猫拥有了更健康的身体和更温驯的性格。</p>
        </div>
      </div>
    </div>
    <div class="clearfix"></div>
  </div>
</template>
<script>
export default {
  name: "Team",
  data() {
    return {
      
    }
  },
};
</script>
<style scoped>
.team {
  text-align: center;
  padding-top: 15px;
}
.team h3 {
  margin-bottom: 10px;
}
.team .team-item {
  width: 50%;
  height: 400px;
  background-color: #ccc;
  float: left;
  overflow: hidden;
  position: relative;
}
.team .team-item img {
  width: 100%;
  height: 100%;
}
.team .team-item .team-item-main {
  padding: 0 50px;
}
.team .team-item .team-item-main h4 {
  padding-top: 20px;
}
.team .team-item .team-item-name {
  position: absolute;
  bottom: 20px;
  padding-right: 50px;
}
hr {
  margin: 0 auto;
  width: 100px;
  margin-bottom: 10px;
}
</style>