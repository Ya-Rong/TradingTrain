update_El_a_Img = (targetClass, targetData) => {
    const target_aElement = document.getElementsByClassName(targetClass);
    const target_imgElement = target_aElement[0];
    // console.log(target_imgElement)
    target_imgElement.src = targetData.src;
}

update_El_a_text = (targetClass, targetData) => {
    const targetEl = document.getElementsByClassName(targetClass);
    targetEl[0].innerHTML = targetData.text;
    targetEl[0].href = targetData.text_href;
}


// leftnews_img
update_El_a_Img('firstnews_img', leftnews_img_Data);
// midnews_img
update_El_a_Img('centernews_img', center_img_Data);
update_El_a_Img('lastnews_img', lastnews_img_Data);
// rightnews_img
update_El_a_Img('author01', author01_img_Data);
// recommended_img
update_El_a_Img('recommended_1_img', recommended_img_Data);
update_El_a_Img('recommended_2_img', recommended_img_Data);
update_El_a_Img('recommended_3_img', recommended_img_Data);
update_El_a_Img('recommended_4_img', recommended_img_Data);
// graphic_img
update_El_a_Img('graphic_img', graphic_img_Data);
// news_img
update_El_a_Img('news_img', news_img_Data);
update_El_a_Img('news_img_1023', news_img_Data);

// sectionnews
// international_img
update_El_a_Img('international_img', international_img_Data);
update_El_a_Img('international_2_img', international_2_img_Data);
// finance_img
update_El_a_Img('finance_img', international_img_Data);
update_El_a_Img('finance_2_img', international_2_img_Data);

// leader_img
update_El_a_Img('leader_photo_img', author01_img_Data);
update_El_a_Img('leader_img', lastnews_img_Data);
update_El_a_Img('leader_2_img', lastnews_img_Data);
update_El_a_Img('leader2_photo_img', author01_img_Data);
update_El_a_Img('leader2_img', lastnews_img_Data);
update_El_a_Img('leader2_2_img', lastnews_img_Data);

// text

// leftnews
update_El_a_text('left_text_1', leftnews_text_Data[0]);
update_El_a_text('left_text_2', leftnews_text_Data[1]);
update_El_a_text('left_text_3', leftnews_text_Data[2]);
update_El_a_text('left_text_4', leftnews_text_Data[3]);

// midnews
update_El_a_text('mid_text_2', midnews_text_Data[0]);
update_El_a_text('mid_text_content', midnews_text_Data[1]);

// rightnews
update_El_a_text('author-list_title', editor_text_Data[0]);
update_El_a_text('author-list_name', editor_text_Data[1]);
update_El_a_text('author-list_position', editor_text_Data[2]);
update_El_a_text('recommended_1', recommended_text_Data[0]);
update_El_a_text('recommended_2', recommended_text_Data[1]);
update_El_a_text('recommended_3', recommended_text_Data[2]);
update_El_a_text('recommended_4', recommended_text_Data[3]);

// graphic
update_El_a_text('graphic_title', graphic_text_Data[0]);
update_El_a_text('graphic_content', graphic_text_Data[1]);
