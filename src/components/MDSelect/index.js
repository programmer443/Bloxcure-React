// import { forwardRef } from "react";
// // prop-types is a library for typechecking of props
// import PropTypes from "prop-types";

// // Custom styles for MDSelect
// import MDButtonRoot from "components/MDSelect/MDSelectRoot";

// // Material Dashboard 2 React contexts
// import { useMaterialUIController } from "context";

// const MDButton = forwardRef(
//     ({ color, variant, size, circular, iconOnly, children, ...rest }, ref) => {
//       const [controller] = useMaterialUIController();
//       const { darkMode } = controller;
  
//       return (
//         <MDButtonRoot
//           {...rest}
//           ref={ref}
//           color="primary"
//           variant={variant === "gradient" ? "contained" : variant}
//           size={size}
//           ownerState={{ color, variant, size, circular, iconOnly, darkMode }}
//         >
//           {children}
//         </MDButtonRoot>
//       );
//     }
//   );


// const CustomSelect = forwardRef(function CustomSelect(props, ref) {
//     const components = {
//       Root: StyledButton,
//       Listbox: StyledListbox,
//       Popper: StyledPopper,
//       ...props.components,
//     };
  
//     return (
//     <MDSelectRoot 
//     {...props} ref={ref} 
//     components={components} 
//     size={size}
//     ownerState={{ color, variant, size, circular, iconOnly, darkMode }}>
//         {Children}
//     </MDSelectRoot>
//   }));
  
//   function renderValue(option) {
//     if (option == null) {
//       return <span>Select an option...</span>;
//     }
  
//     return (
//       <span>
//         {option.label}
//       </span>
//     );
//   }
  
//    const MDSelect = ({role,onChange}) =>
//     ( 
//       <CustomSelect  onChange={onChange} renderValue={renderValue}>
//         {
//           role.map(r=><StyledOption   value={r.id}>{r.name}</StyledOption>)
//         }
//       </CustomSelect>
//     );
  
//     export default MDSelect;