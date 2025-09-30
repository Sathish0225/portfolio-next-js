export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags?: string[];
  image?: string;
  published: boolean;
  featured: boolean;
}

export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

export const blogs: Blog[] = [
  {
    id: "building-scalable-react-applications",
    title: "Building Scalable React Applications with Modern Architecture",
    excerpt:
      "Learn how to structure React applications for scalability using modern patterns like feature-based organization, custom hooks, and component composition.",
    content: `# Building Scalable React Applications with Modern Architecture

Building scalable React applications requires careful planning and architectural decisions. In this comprehensive guide, we'll explore the best practices and patterns that will help you create maintainable, performant applications.

## Feature-Based Organization

One of the most important aspects of scalable React applications is proper file organization. Instead of organizing by file type, organize by features:

\`\`\`
src/
  features/
    auth/
      components/
      hooks/
      services/
    dashboard/
      components/
      hooks/
      services/
\`\`\`

## Custom Hooks for Logic Reuse

Custom hooks are powerful tools for sharing stateful logic between components:

\`\`\`javascript
function useAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Authentication logic here
  
  return { user, loading, login, logout }
}
\`\`\`

## Component Composition

Favor composition over inheritance. Use compound components and render props to create flexible, reusable UI components.

## Performance Optimization

- Use React.memo() for expensive components
- Implement proper key props for lists
- Lazy load components with React.lazy()
- Use useMemo() and useCallback() judiciously

## Conclusion

Building scalable React applications is about making thoughtful architectural decisions early in the development process. These patterns will serve you well as your application grows.`,
    date: "2024-09-15",
    readTime: "8 min read",
    tags: ["React", "Architecture", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop",
    published: true,
    featured: false,
  },
  {
    id: "future-web-development-trends-2024",
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt:
      "Exploring the latest trends in web development including AI integration, edge computing, and the evolution of JavaScript frameworks.",
    content: `# The Future of Web Development: Trends to Watch in 2024

The web development landscape is constantly evolving, and 2024 brings exciting new trends and technologies that will shape how we build applications.

## AI Integration Everywhere

Artificial Intelligence is no longer a nice-to-have feature—it's becoming essential:

- **Code Generation**: Tools like GitHub Copilot are revolutionizing how we write code
- **Content Creation**: AI-powered content generation for dynamic applications
- **User Experience**: Personalized experiences through machine learning

## Edge Computing Revolution

Moving computation closer to users:

- **Faster Performance**: Reduced latency for global applications
- **Better User Experience**: Instant loading and real-time interactions
- **Cost Efficiency**: Optimized resource usage

## Framework Evolution

JavaScript frameworks continue to mature:

- **React 18+**: Concurrent features and improved performance
- **Next.js 14**: App Router and enhanced developer experience
- **Svelte/SvelteKit**: Compile-time optimizations gaining traction

## WebAssembly Growth

WASM is enabling new possibilities:

- **Performance**: Near-native speed for web applications
- **Language Diversity**: Write web apps in Rust, Go, and more
- **Complex Applications**: CAD tools, games, and scientific computing

## The Rise of Micro-Frontends

Breaking down monolithic frontends:

- **Team Scalability**: Independent development and deployment
- **Technology Diversity**: Mix different frameworks in one application
- **Maintenance**: Easier updates and bug fixes

## Conclusion

2024 is shaping up to be an exciting year for web development. Stay curious, keep learning, and embrace these emerging technologies to stay ahead of the curve.`,
    date: "2024-08-28",
    readTime: "6 min read",
    tags: ["Web Development", "Trends", "AI"],
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
    published: true,
    featured: false,
  },
  {
    id: "optimizing-nodejs-performance",
    title: "Optimizing Performance in Node.js Applications",
    excerpt:
      "Deep dive into Node.js performance optimization techniques including memory management, async operations, and database query optimization.",
    content: `# Optimizing Performance in Node.js Applications

Node.js applications can achieve excellent performance when properly optimized. This guide covers essential techniques for maximizing your application's efficiency.

## Memory Management

Proper memory management is crucial for Node.js performance:

### Avoid Memory Leaks
- Monitor memory usage with \`process.memoryUsage()\`
- Use weak references where appropriate
- Clean up event listeners and timers

### Garbage Collection Optimization
\`\`\`javascript
// Use object pooling for frequently created objects
const objectPool = []

function getObject() {
  return objectPool.pop() || createNewObject()
}

function releaseObject(obj) {
  resetObject(obj)
  objectPool.push(obj)
}
\`\`\`

## Async Operations Best Practices

### Promise Management
- Use Promise.all() for parallel operations
- Implement proper error handling
- Avoid callback hell with async/await

### Stream Processing
\`\`\`javascript
const fs = require('fs')
const { pipeline } = require('stream')

pipeline(
  fs.createReadStream('input.txt'),
  transformStream,
  fs.createWriteStream('output.txt'),
  (err) => {
    if (err) console.error('Pipeline failed:', err)
    else console.log('Pipeline succeeded')
  }
)
\`\`\`

## Database Query Optimization

### Connection Pooling
- Use connection pools to manage database connections
- Set appropriate pool sizes based on your application needs
- Monitor connection usage

### Query Optimization
- Use indexes effectively
- Implement query result caching
- Batch operations when possible

## Clustering and Load Balancing

Take advantage of multi-core systems:

\`\`\`javascript
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }
} else {
  // Worker process
  require('./app.js')
}
\`\`\`

## Monitoring and Profiling

- Use APM tools like New Relic or DataDog
- Implement custom metrics and logging
- Regular performance audits

## Conclusion

Performance optimization is an ongoing process. Regular monitoring, profiling, and optimization will ensure your Node.js applications scale effectively.`,
    date: "2024-08-10",
    readTime: "12 min read",
    tags: ["Node.js", "Performance", "Backend"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    published: true,
    featured: false,
  },
  {
    id: "typescript-best-practices-large-scale",
    title: "TypeScript Best Practices for Large Scale Applications",
    excerpt:
      "Essential TypeScript patterns and practices for building maintainable applications at scale, including type design and error handling strategies.",
    content: `# TypeScript Best Practices for Large Scale Applications

TypeScript transforms JavaScript development by adding static typing. Here are the essential practices for building maintainable applications at scale.

## Type Design Principles

### Use Descriptive Type Names
\`\`\`typescript
// Good
interface UserProfile {
  id: string
  email: string
  preferences: UserPreferences
}

// Avoid generic names
interface Data {
  id: string
  value: any
}
\`\`\`

### Leverage Union Types
\`\`\`typescript
type Status = 'loading' | 'success' | 'error'
type Theme = 'light' | 'dark' | 'auto'

interface AppState {
  status: Status
  theme: Theme
  data?: any
}
\`\`\`

## Advanced Type Patterns

### Generic Constraints
\`\`\`typescript
interface Identifiable {
  id: string
}

function updateEntity<T extends Identifiable>(
  entity: T, 
  updates: Partial<T>
): T {
  return { ...entity, ...updates }
}
\`\`\`

### Utility Types
\`\`\`typescript
// Pick specific properties
type UserSummary = Pick<User, 'id' | 'name' | 'email'>

// Make properties optional
type PartialUser = Partial<User>

// Create readonly versions
type ReadonlyUser = Readonly<User>
\`\`\`

## Error Handling Strategies

### Result Pattern
\`\`\`typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E }

async function fetchUser(id: string): Promise<Result<User>> {
  try {
    const user = await api.getUser(id)
    return { success: true, data: user }
  } catch (error) {
    return { success: false, error: error as Error }
  }
}
\`\`\`

## Project Structure

### Feature-Based Organization
\`\`\`
src/
  types/
    common.ts
    api.ts
  features/
    user/
      types.ts
      services.ts
      components/
\`\`\`

### Shared Type Definitions
- Keep common types in a shared location
- Use namespace declarations for complex type hierarchies
- Export types alongside their related functions

## Configuration and Tooling

### tsconfig.json Best Practices
\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitReturns": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": true
  }
}
\`\`\`

## Testing with TypeScript

- Use typed test helpers
- Test type definitions with type-level tests
- Leverage TypeScript in test utilities

## Conclusion

TypeScript's power lies in its type system. Use these patterns to build robust, maintainable applications that scale with your team and requirements.`,
    date: "2024-07-22",
    readTime: "10 min read",
    tags: ["TypeScript", "Best Practices", "Development"],
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&h=400&fit=crop",
    published: true,
    featured: false,
  },
];
