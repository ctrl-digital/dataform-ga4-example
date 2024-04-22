const getEventParam = (eventParamName, eventParamType = "string") => {
  let eventParamTypeName = "";
  switch (eventParamType) {
    case "string":
      eventParamTypeName = "string_value";
      break;
    case "int":
      eventParamTypeName = "int_value";
      break;
    case "double":
      eventParamTypeName = "double_value";
      break;
    case "float":
      eventParamTypeName = "float_value";
      break;
    default:
      throw "eventType is not valid";
  }
  return `(SELECT ep.value.${eventParamTypeName} AS ${eventParamName} FROM UNNEST(event_params) ep WHERE ep.key = '${eventParamName}')`;
};

const getUserParam = (eventParamName, eventParamType = "string") => {
  let eventParamTypeName = "";
  switch (eventParamType) {
    case "string":
      eventParamTypeName = "string_value";
      break;
    case "int":
      eventParamTypeName = "int_value";
      break;
    case "double":
      eventParamTypeName = "double_value";
      break;
    case "float":
      eventParamTypeName = "float_value";
      break;
    default:
      throw "eventType is not valid";
  }
  return `(SELECT up.value.${eventParamTypeName} AS ${eventParamName} FROM UNNEST(user_properties) up WHERE up.key = '${eventParamName}') `;
};

const getSessionParam = (eventParamName, columnName = false)=>{
  return `ARRAY_AGG(${eventParamName}  IGNORE NULLS ORDER BY event_timestamp desc LIMIT 1)[SAFE_OFFSET(0)] as ${ columnName ? columnName : eventParamName }`
};

const getEventId = () => {
  return `FARM_FINGERPRINT(CONCAT(ifnull((SELECT ep.value.int_value FROM UNNEST(event_params) ep WHERE ep.key = 'event_tag_timestamp'),event_timestamp), event_name, user_pseudo_id)) as event_id`
};

const getSessionId = () => {
return `FARM_FINGERPRINT(CONCAT((select value.int_value from unnest(event_params) where key = 'ga_session_id'), user_pseudo_id)) as session_id`
};

const getDefaultChannelGroup = (source, medium, campaign) =>
`CASE
      WHEN ${source} in ('direct','(direct)','(not set)') and ${medium} in ("(not set)","not set", "none", "(none)") THEN 'Direct'
      WHEN ${medium} in ('display', 'banner', 'expandable', 'interstitial', 'cpm') THEN 'Display'
      WHEN ${source} in ('email','e-mail','e_mail','e mail') or ${medium} in ('email','e-mail','e_mail','e mail') THEN 'Email'

      WHEN ${source} in ('google','bing') and REGEXP_CONTAINS(${medium}, r'^(.*cp.*|ppc|retargeting|paid.*)$') and REGEXP_CONTAINS(LOWER(${campaign}), r'^(.*brand.*)$')  THEN 'Branded Paid Search'
      WHEN ${source} in ('google','bing') and REGEXP_CONTAINS(${medium}, r'^(.*cp.*|ppc|retargeting|paid.*)$') THEN 'Generic Paid Search'
      WHEN ${source} in ('google','bing') and REGEXP_CONTAINS(${medium}, r'^(.*cp.*|ppc|retargeting|paid.*)$') THEN 'Paid Search'

      WHEN ${source} in ('linkedin', 'instagram', 'facebook', 't.co', 'tiktok', 'lnkd.in') and REGEXP_CONTAINS(${medium}, r'^(.*cp.*|ppc|retargeting|paid.*)$') THEN 'Social'
      WHEN ${source} in ('google','bing','yahoo','baidu','duckduckgo', 'yandex') or ${medium} = 'organic' THEN 'Organic Search'
      WHEN ${source} in ('linkedin', 'instagram', 'facebook', 't.co', 'tiktok', 'lnkd.in') or ${medium} in ('social', 'social-network', 'social-media', 'sm', 'social network', 'social media') THEN 'Social'
      WHEN ${medium} in ("affiliate","affiliate") THEN 'Affiliates'
      WHEN ${medium} in ("referral", "app",  "link") THEN 'Referral'
      WHEN ${source} is null or ${medium} is null THEN '' 
      ELSE 'Unassigned'
    END
`;

module.exports = {
  getEventParam,
  getUserParam,
  getSessionParam,
  getEventId,
  getSessionId,
  getDefaultChannelGroup,
};
