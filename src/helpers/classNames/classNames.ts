type TMods = Record<string, boolean| string>;

export const classNames = (cls: string, mods:TMods = {}, additional: string[] = []) => {
    
    return [
        cls, 
        Object.keys(mods).filter((key) => mods[key]), 
        additional.filter(Boolean)
    ]
    .flat()
    .join(' ')
    
}

