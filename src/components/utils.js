function getBgColor(colors, kind, dark) {
  switch (kind) {
    case 'basic-outline':
      return dark ? colors.black : colors.white
    case 'basic':
      return dark ? colors.white : colors.black
    case 'primary-outline':
      return colors.transparent
    case 'primary':
      return colors.primary
    case 'secondary-outline':
      return colors.transparent
    case 'secondary':
      return colors.secondary
    case 'tertiary-outline':
      return colors.transparent
    case 'tertiary':
      return colors.tertiary
    case 'transparent':
      return colors.transparent
  }
}

function getHoveredBgColor(colors, kind, dark) {
  switch (kind) {
    case 'basic-outline':
      return dark ? colors.white : colors.black
    case 'basic':
      return dark ? colors.black : colors.white
    case 'primary-outline':
      return colors.primary
    case 'primary':
      return colors.transparent
    case 'secondary-outline':
      return colors.secondary
    case 'secondary':
      return colors.transparent
    case 'tertiary-outline':
      return colors.tertiary
    case 'tertiary':
      return colors.transparent
    case 'transparent':
      return colors.transparent
  }
}

function getBorderColor(colors, kind, dark) {
  switch (kind) {
    case 'basic-outline':
      return dark ? colors.white : colors.black
    case 'basic':
      return dark ? colors.white : colors.black
    case 'primary-outline':
      return colors.primary
    case 'primary':
      return colors.primary
    case 'secondary-outline':
      return colors.secondary
    case 'secondary':
      return colors.secondary
    case 'tertiary-outline':
      return colors.tertiary
    case 'tertiary':
      return colors.tertiary
    case 'transparent':
      return colors.transparent
  }
}

function getColor(colors, kind, dark) {
  switch (kind) {
    case 'basic-outline':
      return dark ? colors.white : colors.black
    case 'basic':
      return dark ? colors.black : colors.white
    case 'primary-outline':
      return dark ? colors.white : colors.black
    case 'primary':
      return colors.white
    case 'secondary-outline':
      return dark ? colors.white : colors.black
    case 'secondary':
      return colors.black
    case 'tertiary-outline':
      return dark ? colors.white : colors.black
    case 'tertiary':
      return colors.white
    case 'transparent':
      return dark ? colors.white : colors.black
  }
}

function getHoveredColor(colors, kind, dark) {
  switch (kind) {
    case 'basic-outline':
      return dark ? colors.black : colors.white
    case 'basic':
      return dark ? colors.white : colors.black
    case 'primary-outline':
      return colors.white
    case 'primary':
      return dark ? colors.white : colors.black
    case 'secondary-outline':
      return colors.black
    case 'secondary':
      return dark ? colors.white : colors.black
    case 'tertiary-outline':
      return colors.white
    case 'tertiary':
      return dark ? colors.white : colors.black
    case 'transparent':
      return dark ? colors.white : colors.black
  }
}

function getLabelColor(colors, dark) {
  return dark ? colors.white : colors.black
}

export {
  getBgColor,
  getBorderColor,
  getColor,
  getHoveredBgColor,
  getHoveredColor,
  getLabelColor
}
